# RN Spoiler

[Expo](https://expo.io/) の [expo-template-bare-typescript](https://github.com/expo/expo/tree/master/templates/expo-template-bare-typescript) をベースにした React Native のテンプレートです。

## 前提条件

- [React Native の開発環境が構築](https://reactnative.dev/docs/environment-setup)されていること
  - **必ず「React Native CLI Quickstart」というタブをクリック**して、手順を実施してください。
  - 「Development OS」は、開発に利用している OS を選択してください。
  - （macOS のみ）「Target OS」は、「iOS」「Android」の両方の手順を実施してください。

## 注意事項

`react-native-cli` がグローバルにインストールされていると、テンプレートからの新規プロジェクトの作成に失敗します。

グローバルにインストールされているパッケージは `npm ls -g --depth=0` で確認することができます。
実行結果に `react-native-cli` が含まれている場合は、 **必ず** アンインストールしてください。
`npm uninstall -g react-native-cli` でアンインストールできます。

```bash
・実行例
npm ls -g --depth=0
+-- expo-cli@3.28.5
+-- npm@6.14.8
+-- react-native-cli@2.0.1
`-- yarn@1.22.10

```

## 使い方

### 新規プロジェクトの作成

次のコマンドを実行して、新規プロジェクトを作成できます。

```bash
npx react-native init --template https://github.com/ws-4020/rn-spoiler.git <YourAppName>
```

`<YourAppName>` に設定した名前でディレクトリが作成されます。

正しく生成できていることを確認するために、次のコマンドを実行してアプリが正しく起動することを確認してください。

```bash
npm run ios        # iPhoneシミュレータが起動します
npm run android    # Androidエミュレータが起動します
```

## `expo-template-bare-typescript` からの変更点

- [x] デフォルトでは`expo-update`を無効化
- [x] Editorconfig, ESLint, Prettier を追加
- [x] TypeScript の設定ファイルを修正、`tsc`での型チェックを lint に追加
- [x] Android でデフォルトで要求するパーミッションの最小化
- [x] `App.tsx`を`src`ディレクトリ配下に移動
- [x] 開発者ごとに簡単に Signing できるように、Signing 情報を記述するテンプレートファイルを iOS のビルド設定に追加
- [x] UI ライブラリとして[React Native Elements](https://reactnativeelements.com/)を追加
- [x] ナビゲーションに[React Navigation](https://reactnavigation.org/)を追加、画面を修正
- [x] React Native の使い方ページを、 [react-native-template-typescript](https://github.com/react-native-community/react-native-template-typescript) から追加。
  - `src/screens/instructions/Instructions.tsx` は、[react-native-template-typescript](https://github.com/react-native-community/react-native-template-typescript) に含めて配布されている [`App.tsx`](https://github.com/react-native-community/react-native-template-typescript/blob/60690d1f7f3c2856d4c7129fd972400452c9510d/template/App.tsx) を利用しています。
- [x] Jestの設定を`jest.config.js`に移動し、`react-navigation`と`react-native-screens`に必要なネイティブモジュールをモック化
- [x] Jestのスナップショットファイルの配置場所を変更
- [x] `src`ディレクトリを基準とした絶対パスで`import`できるように変更
- [x] プロジェクト作成後に自動的に必要なファイルを作成するように変更
- [x] キャッシュを削除するためのスクリプトを追加
