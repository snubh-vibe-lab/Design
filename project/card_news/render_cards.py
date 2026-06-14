import subprocess, os
from PIL import Image

SRC = os.path.dirname(os.path.abspath(__file__))
OUT = r"C:\Users\user\aiproject\snubh-vibe-lab\Cardnews\2026\06\vibe-coding-agentic-tips"
CHROME = r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
TOPICS = ["scope", "brief", "readfirst", "guardrail"]
NUMS = ["01", "02", "03", "04"]

finals = []
for t in TOPICS:
    for n in NUMS:
        html = os.path.join(SRC, f"vibetip_{t}_{n}.html")
        tmp = os.path.join(SRC, f"_raw_{t}_{n}.png")
        final = os.path.join(OUT, f"Cardnews_20260614_vibetip_{t}_{n}.png")
        subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                        "--force-device-scale-factor=2", "--window-size=1180,1180",
                        "--virtual-time-budget=6000", f"--screenshot={tmp}", html],
                       check=True, capture_output=True)
        im = Image.open(tmp).convert("RGB").crop((0, 0, 2160, 2160))
        im.save(final)
        os.remove(tmp)
        finals.append(final)
        print("rendered", os.path.basename(final))

# contact sheet: 4 cols (nums) x 4 rows (topics), each tile 540px
TILE = 540
sheet = Image.new("RGB", (TILE*4, TILE*4), (255, 255, 255))
for r, t in enumerate(TOPICS):
    for c, n in enumerate(NUMS):
        f = os.path.join(OUT, f"Cardnews_20260614_vibetip_{t}_{n}.png")
        tile = Image.open(f).convert("RGB").resize((TILE, TILE), Image.LANCZOS)
        sheet.paste(tile, (c*TILE, r*TILE))
sheet.save(os.path.join(OUT, "contact_sheet.png"))
print("contact sheet rebuilt:", sheet.size)
print("done", len(finals), "cards")
