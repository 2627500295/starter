# React Starter Kit

## Tech Stack

- React 18

- React Router 6

- Rematch

- TypeScript

- Vite

- ESLint

- Prettier

- PNPM

## Requirements

## 参考

- [Date-time annotation formats](https://www.ibm.com/docs/en/oala/1.3.2?topic=SSPFMY_1.3.2/com.ibm.scala.doc/admin/iwa_appxb_date-time_formats.html)

- [TimeStamp](https://docs.datastax.com/en/dse/6.7/cql/cql/cql_reference/refDataTypes.html#refDataTypes__timestamp)

### 时间戳

[时间戳](https://docs.datastax.com/en/dse/6.7/cql/cql/cql_reference/refDataTypes.html#refDataTypes__timestamp) 是 ISO 8601 格式的时区日期和时间的组合。

```
yyyy-mm-dd[(T| )HH:MM:SS[.fff]][(+|-)NNNN]
```

- 日期

  - yyyy: 4 位数年份
  - mm: 2 位数的月份
  - dd: 2 位数的日期

- 时间

  - HH : 24 小时两位数时间。
  - MM：两位数分钟。
  - SS：两位数秒。
  - （可选）.fff: 毫秒

- 时区

  - \+ | - 表示是否为 GMT 添加或减去 NNNN。
  - NNNN 是 RFC-822 的 4 位时区。例如，+0000 是 GMT 和-0800PST。

  注意：如果您不包括时区，它将被设置为客户端或协调器时区。

例如，2017 年 5 月 5 日，格林威治标准时间午夜将是：

```
2017-05-05 00:00:00.000+0000
2017-05-05 00:00:00.000
2017-05-05 00:00:00
2017-05-05
```
