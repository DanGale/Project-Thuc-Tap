# Theme dev

Sau khi clone về thì chạy lệnh sau để pull submodules

```
git submodule update --init
git submodule update --recursive --remote
```

## Requirement

Nên dùng pnpm cho đỡ nặng máy.

Install:

```
pnpm i
```

## Pull

Khi pull về thì nên pull kèm cả submodule, vì packages có thể có nhiều update

```
git pull --recurse-submodules
```

## Dev

Để chạy dev:

```
pnpm run dev --filter workshop
```

trong đó `workshop` là tên theme cần dev (nằm trong folder themes)

hoặc cd vào trong folder theme/workshop và chạy

```
pnpm run dev
```

Chú ý không chạy `pnpm run dev` ngoài thư mục gốc nếu không muốn quạt quay vù vù

## Error

Chú ý nếu run dev mà thấy dòng này:

```
👉 Press any key to open the login page on your browser
```

thì phải cd vào folder theme và chạy run dev, sau đó ấn phím bất kì mới có tác dụng
