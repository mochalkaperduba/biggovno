import undetected_chromedriver as chr
from selenium.webdriver.chrome.options import Options
import sys

d = chr.Chrome(version_main = 109)
d.get("https://ficbook.net")
com = "q(\""+sys.argv[1]+"\",\""+sys.argv[2]+"\")"
print(com)
