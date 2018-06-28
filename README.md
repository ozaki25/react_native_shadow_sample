# ボタンに影をつける

## ios

- `shadowXxx`系の値で影をつけることができる

  ```js
    shadowColor: "#ccc",
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowRadius: 0,
    shadowOpacity: 1,
  ```

![ios](./ios.png)

## android

- `elevation`で影をつけることができる
  - iosのように細かな制御はできないっぽい

  ```js
  elevation: 10
  ```

![android](./android.png)
