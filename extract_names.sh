cat "$1" | grep -i @amazon.com | awk -F , '{print $3,$2}' > output.txt

