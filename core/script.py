import undetected_chromedriver as chr
from selenium.webdriver.chrome.options import Options
import sys

d = chr.Chrome(version_main = 109)
d.get("https://ficbook.net")

# Read the file
with open('1.npt', 'r') as f:
    lines = f.readlines()

# Convert each line to an integer
ints = [int(line) for line in lines]

# Create an array from the integers
arr = np.array(ints)

com = "q(\""+sys.argv[1]+"\",\""+sys.argv[2]+"\",\""+sys.argv[3]+"\","
print(com)
