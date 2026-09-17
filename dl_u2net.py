import urllib.request
import os

print('Downloading U2Net...')
os.makedirs('C:/Users/user/.u2net', exist_ok=True)
url = 'https://github.com/danielgatis/rembg/releases/download/v0.0.0/u2net.onnx'
urllib.request.urlretrieve(url, 'C:/Users/user/.u2net/u2net.onnx')
print('Download complete!')
