Gmail風 UI - サンプル

このフォルダには、Gmail風の静的なHTML/CSS/JSサンプルがあります。

使い方（Windows - PowerShell）:

1. エクスプローラーでフォルダを開くか、PowerShellでこのディレクトリに移動します:
   Set-Location -Path "c:\work\git-sample\gmail_clone"

2. ブラウザで開くには（既定のブラウザで開く）:
   Start-Process .\index.html

または簡単にダブルクリックで `index.html` を開いてください。

説明:
- `index.html` - ページ本体
- `styles.css` - スタイル
- `script.js` - 簡易インタラクション（サイドバーのトグル）

必要なら、さらにレスポンシブ対応やメールデータの動的読み込み（JSON）などを追加できます。