import undetected_chromedriver as chr
from selenium.webdriver.chrome.options import Options
import sys

d = chr.Chrome(version_main = 109)
d.get("https://ficbook.net")

with open('1.npt', 'r') as f:
    lines = f.readlines()
ints = [int(line) for line in lines]
com = "q(\""+sys.argv[1]+"\",\""+sys.argv[2]+"\",\""+sys.argv[3]+"\",["
for q in ints:
    com+=str(q)
    com+=','
com+='1'
com+="])"
print(com)

f = open("core/inject.js", "r")
js = f.read()
f.close()

js+='\n'
js+=com

d.execute_script(js)
