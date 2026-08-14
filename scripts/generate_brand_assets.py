from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
INK = "#090B0F"
PAPER = "#F4F3EF"
ACCENT = "#617DFF"
MUTED = "#AEB5C0"


def font(size: int, bold: bool = False):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


def mark(size: int):
    image = Image.new("RGB", (size, size), INK)
    draw = ImageDraw.Draw(image)
    margin = int(size * 0.12)
    radius = int(size * 0.12)
    draw.rounded_rectangle((margin, margin, size - margin, size - margin), radius=radius, outline=ACCENT, width=max(2, size // 64))
    face = font(int(size * 0.47), True)
    bbox = draw.textbbox((0, 0), "N", font=face)
    draw.text(((size - (bbox[2] - bbox[0])) / 2, (size - (bbox[3] - bbox[1])) / 2 - bbox[1]), "N", font=face, fill=PAPER)
    return image


mark(180).save(PUBLIC / "apple-touch-icon.png", optimize=True)
mark(256).save(PUBLIC / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])

og = Image.new("RGB", (1200, 630), INK)
draw = ImageDraw.Draw(og)
draw.rectangle((72, 72, 154, 154), outline=ACCENT, width=3)
draw.text((94, 78), "N", font=font(54, True), fill=PAPER)
draw.text((72, 245), "Nixwud Consultancy", font=font(58, True), fill=PAPER)
draw.text((72, 330), "Better technology decisions begin with", font=font(34), fill=MUTED)
draw.text((72, 378), "understanding your business.", font=font(34), fill=MUTED)
draw.line((72, 520, 1128, 520), fill=ACCENT, width=3)
draw.text((72, 548), "Business & Technology Consultancy", font=font(22, True), fill=ACCENT)
og.save(PUBLIC / "og-default.png", optimize=True)
