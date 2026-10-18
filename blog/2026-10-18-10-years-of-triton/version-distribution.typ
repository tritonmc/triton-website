#{
  import "@preview/lilaq:0.6.0" as lq

  set page(paper: "a7", flipped: true, margin: 0.5em)

  let data = csv("./data.csv", row-type: dictionary)

  let to_datetime = it => {
    let date_parts = it.split("-")
    datetime(year: int(date_parts.at(0)), month: int(date_parts.at(1, default: 1)), day: int(date_parts.at(
      2,
      default: 1,
    )))
  }

  let group_by_year = (:)
  for row in data {
    let version = row.version
    let date = row.date.split("-").at(0)

    group_by_year.insert(date, group_by_year.at(date, default: 0) + 1)
  }

  lq.diagram(
    width: 100%,
    height: 100%,
    title: [Number of Triton releases per year],
    xaxis: (subticks: none),
    lq.bar(
      group_by_year.keys().map(to_datetime),
      group_by_year.values(),
    ),
  )
}
