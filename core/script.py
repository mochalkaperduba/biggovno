import undetected_chromedriver as chr
from selenium.webdriver.chrome.options import Options
import sys
import time
import base64


chrome_options = Options()
chrome_options.add_argument("--disable-web-security")
d = chr.Chrome(version_main = 109, options = chrome_options)
d.get("https://ficbook.net")

base64_message = sys.argv[4]
base64_bytes = base64_message.encode('ascii')
message_bytes = base64.b64decode(base64_bytes)
message = message_bytes.decode('ascii')
lines = message.split()

ints = [int(line.replace("\n","")) for line in lines]
com = "q(\""+sys.argv[1]+"\",\""+sys.argv[2]+"\",\""+sys.argv[3]+"\",["
for q in ints:
    com+=str(q)
    com+=','
com+='1'
com+="])"
print(com)

f = open("core/inject.js", "r", encoding='utf-8')
js = f.read()
f.close()

js+='\n'
js+=com

d.execute_script(js)

time.sleep(2*60)
