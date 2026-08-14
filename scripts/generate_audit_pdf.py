from pathlib import Path
from shutil import copyfile

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "business-technology-alignment-audit.pdf"
PUBLIC = ROOT / "public" / "resources" / "business-technology-alignment-audit.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
PUBLIC.parent.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor("#090B0F")
PAPER = colors.HexColor("#F4F3EF")
ACCENT = colors.HexColor("#617DFF")
MUTED = colors.HexColor("#59616D")
LINE = colors.HexColor("#D3D5DA")

pdfmetrics.registerFont(TTFont("NixSans", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("NixSansBold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Eyebrow", parent=styles["Normal"], fontName="NixSansBold", fontSize=8, leading=10, textColor=ACCENT, spaceAfter=12))
styles.add(ParagraphStyle(name="TitleLarge", parent=styles["Title"], fontName="NixSansBold", fontSize=34, leading=38, textColor=INK, alignment=TA_LEFT, spaceAfter=18))
styles.add(ParagraphStyle(name="PageTitle", parent=styles["Heading1"], fontName="NixSansBold", fontSize=24, leading=28, textColor=INK, spaceAfter=12))
styles.add(ParagraphStyle(name="HeadingSmall", parent=styles["Heading2"], fontName="NixSansBold", fontSize=13, leading=16, textColor=INK, spaceBefore=8, spaceAfter=6))
styles.add(ParagraphStyle(name="BodyNix", parent=styles["BodyText"], fontName="NixSans", fontSize=10, leading=15, textColor=MUTED, spaceAfter=10))
styles.add(ParagraphStyle(name="Question", parent=styles["BodyText"], fontName="NixSans", fontSize=9.5, leading=13, textColor=INK))
styles.add(ParagraphStyle(name="Tiny", parent=styles["BodyText"], fontName="NixSans", fontSize=7.5, leading=10, textColor=MUTED))


def header_footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setStrokeColor(ACCENT)
    canvas.setLineWidth(1.5)
    canvas.line(18 * mm, height - 15 * mm, width - 18 * mm, height - 15 * mm)
    canvas.setFont("NixSansBold", 8)
    canvas.setFillColor(INK)
    canvas.drawString(18 * mm, height - 11 * mm, "NIXWUD CONSULTANCY")
    canvas.setFont("NixSans", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 12 * mm, "Business & Technology Alignment Audit")
    canvas.drawRightString(width - 18 * mm, 12 * mm, f"Page {doc.page}")
    canvas.restoreState()


def question_table(items):
    data = [[Paragraph("Statement", styles["Tiny"]), Paragraph("1", styles["Tiny"]), Paragraph("2", styles["Tiny"]), Paragraph("3", styles["Tiny"]), Paragraph("4", styles["Tiny"]), Paragraph("5", styles["Tiny"])]]
    for index, item in enumerate(items, 1):
        data.append([Paragraph(f"{index}. {item}", styles["Question"]), "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"])
    table = Table(data, colWidths=[125 * mm, 8 * mm, 8 * mm, 8 * mm, 8 * mm, 8 * mm], repeatRows=1)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PAPER),
        ("TEXTCOLOR", (0, 0), (-1, 0), MUTED),
        ("GRID", (0, 0), (-1, -1), 0.45, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (1, 0), (-1, -1), "CENTER"),
        ("FONTNAME", (1, 1), (-1, -1), "NixSans"),
        ("FONTSIZE", (1, 1), (-1, -1), 7),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return table


sections = [
    (
        "Strategy and outcomes",
        "Test whether technology priorities are anchored to a shared business direction.",
        [
            "Our most important business priorities are clearly stated and understood.",
            "Technology initiatives can be linked to specific business outcomes.",
            "Leaders agree on what success should look like over the next 12 months.",
            "Major investments are assessed against clear decision criteria.",
            "We can explain which activities should stop, continue or change.",
            "Measures of value are agreed before delivery begins.",
        ],
    ),
    (
        "Systems, data and experience",
        "Assess whether the digital foundation supports people, information and change.",
        [
            "Key systems support current business processes without excessive workarounds.",
            "Teams know where important business data lives and who owns it.",
            "Customers can complete priority journeys without avoidable friction.",
            "Content and information are structured so people can find and reuse them.",
            "Technical risk and debt are visible enough to influence planning.",
            "New tools are evaluated for fit with the wider operating environment.",
        ],
    ),
    (
        "Execution, ownership and adoption",
        "Check whether the organization can turn a good decision into sustained practice.",
        [
            "Each initiative has clear decision, delivery and operational ownership.",
            "Affected teams are involved early enough to shape the change.",
            "Capacity and skills are considered when commitments are made.",
            "Delivery is broken into stages that can produce evidence and learning.",
            "Adoption is measured beyond launch or technical completion.",
            "Lessons from delivery influence later decisions and priorities.",
        ],
    ),
]

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm, topMargin=25 * mm, bottomMargin=22 * mm, title="Business & Technology Alignment Audit", author="Nixwud Consultancy")
story = [
    Spacer(1, 25 * mm),
    Paragraph("BUSINESS & TECHNOLOGY CONSULTANCY", styles["Eyebrow"]),
    Paragraph("Business & Technology Alignment Audit", styles["TitleLarge"]),
    Paragraph("A practical diagnostic for identifying where strategy, systems and execution are falling out of alignment.", ParagraphStyle(name="CoverLead", parent=styles["BodyNix"], fontSize=15, leading=22, textColor=MUTED, spaceAfter=24)),
    Spacer(1, 12 * mm),
    Table([[Paragraph("HOW TO USE IT", styles["Eyebrow"]), Paragraph("Rate each statement from 1 (not true) to 5 (consistently true). Invite different stakeholders to complete the audit independently, then compare where scores and perspectives diverge.", styles["BodyNix"])]], colWidths=[45 * mm, 120 * mm], style=TableStyle([("BACKGROUND", (0,0), (-1,-1), PAPER), ("BOX", (0,0), (-1,-1), .6, LINE), ("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 12), ("RIGHTPADDING", (0,0), (-1,-1), 12), ("TOPPADDING", (0,0), (-1,-1), 12), ("BOTTOMPADDING", (0,0), (-1,-1), 12)])),
    Spacer(1, 14 * mm),
    Paragraph("The aim is not to produce a perfect score. It is to make misalignment visible early enough to discuss and improve it.", styles["HeadingSmall"]),
    Paragraph("Complete the three assessment sections, total the scores, and use the final page to identify the three most important actions.", styles["BodyNix"]),
    PageBreak(),
]

for idx, (title, intro, questions) in enumerate(sections):
    story.extend([
        Paragraph(f"SECTION {idx + 1} OF 3", styles["Eyebrow"]),
        Paragraph(title, styles["PageTitle"]),
        Paragraph(intro, styles["BodyNix"]),
        Spacer(1, 4 * mm),
        question_table(questions),
        Spacer(1, 10 * mm),
        Paragraph("Section score: ______ / 30", styles["HeadingSmall"]),
        Paragraph("What evidence supports this score?", styles["HeadingSmall"]),
        Paragraph("________________________________________________________________________________", styles["BodyNix"]),
        Paragraph("________________________________________________________________________________", styles["BodyNix"]),
        PageBreak(),
    ])

story.extend([
    Paragraph("TURN SCORES INTO ACTION", styles["Eyebrow"]),
    Paragraph("Interpret the pattern, not just the total.", styles["PageTitle"]),
    Paragraph("Add all three section scores for a maximum of 90. Then look for the lowest statements, the widest disagreements and the issues with the greatest effect on business outcomes.", styles["BodyNix"]),
    Spacer(1, 4 * mm),
    Table([
        [Paragraph("18-44", styles["HeadingSmall"]), Paragraph("Material misalignment", styles["HeadingSmall"]), Paragraph("Pause major commitments and clarify priorities, ownership and evidence.", styles["BodyNix"])],
        [Paragraph("45-69", styles["HeadingSmall"]), Paragraph("Developing alignment", styles["HeadingSmall"]), Paragraph("The direction is forming, but specific gaps could weaken execution or value.", styles["BodyNix"])],
        [Paragraph("70-90", styles["HeadingSmall"]), Paragraph("Strong foundations", styles["HeadingSmall"]), Paragraph("Protect the alignment through staged delivery, measurement and regular review.", styles["BodyNix"])],
    ], colWidths=[25 * mm, 48 * mm, 92 * mm], style=TableStyle([("GRID", (0,0), (-1,-1), .5, LINE), ("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 8), ("RIGHTPADDING", (0,0), (-1,-1), 8), ("TOPPADDING", (0,0), (-1,-1), 8), ("BOTTOMPADDING", (0,0), (-1,-1), 8)])),
    Spacer(1, 8 * mm),
    Paragraph("Three actions to prioritize", styles["HeadingSmall"]),
    Paragraph("1. ______________________________________________________________________________", styles["BodyNix"]),
    Paragraph("2. ______________________________________________________________________________", styles["BodyNix"]),
    Paragraph("3. ______________________________________________________________________________", styles["BodyNix"]),
    Spacer(1, 6 * mm),
    Paragraph("One decision to revisit", styles["HeadingSmall"]),
    Paragraph("________________________________________________________________________________", styles["BodyNix"]),
    Paragraph("Owner: __________________________   Review date: __________________________", styles["BodyNix"]),
    Spacer(1, 8 * mm),
    Paragraph("Nixwud Consultancy helps organizations connect strategy, systems and execution so technology creates measurable business value.", styles["Tiny"]),
])

doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
copyfile(OUTPUT, PUBLIC)
