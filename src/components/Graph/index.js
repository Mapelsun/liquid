import { useD3 } from '../../hooks/useD3'
import * as d3 from 'd3'
import './index.scss'

const dataMain = [
  { product: 'LIQID Cash', initial: 92, total: 920 },
  { product: 'LIQID Real Estate', initial: 63, total: 630 },
  { product: 'LIQID Wealth', initial: 85, total: 850 },
  { product: 'LIQID Private Equity', initial: 22, total: 220 },
  { product: 'LIQID Venture', initial: 51, total: 510 },
]

console.log(dataMain)

const Graph = () => {
  const data = [
    { year: 1980, efficiency: 24.3, sales: 8949000 },
    { year: 1985, efficiency: 27.6, sales: 10979000 },
    { year: 1990, efficiency: 28, sales: 9303000 },
    { year: 1991, efficiency: 28.4, sales: 8185000 },
    { year: 1992, efficiency: 27.9, sales: 8213000 },
    { year: 1993, efficiency: 28.4, sales: 8518000 },
    { year: 1994, efficiency: 28.3, sales: 8991000 },
  ]

  const ref = useD3(
    (svg) => {
      const height = 500
      const width = 500
      const margin = { top: 20, right: 30, bottom: 30, left: 40 }

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1)

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales)])
        .rangeRound([height - margin.bottom, margin.top])

      const xAxis = (g) =>
        g.attr('transform', `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        )

      const y1Axis = (g) =>
        g
          .attr('transform', `translate(${margin.left},0)`)
          .style('color', 'steelblue')
          .call(d3.axisLeft(y1).ticks(null, 's'))
          .call((g) => g.select('.domain').remove())
          .call((g) =>
            g
              .append('text')
              .attr('x', -margin.left)
              .attr('y', 10)
              .attr('fill', 'currentColor')
              .attr('text-anchor', 'start')
              .text(data.y1)
          )

      svg.select('.x-axis').call(xAxis)
      svg.select('.y-axis').call(y1Axis)

      svg
        .select('.plot-area')
        .attr('fill', 'steelblue')
        .selectAll('.bar')
        .data(data)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(d.year))
        .attr('width', x.bandwidth())
        .attr('y', (d) => y1(d.sales))
        .attr('height', (d) => y1(0) - y1(d.sales))
    },
    [data.length]
  )

  return (
    <section className='graph'>
      <h2 className='graph__heading'>Your products</h2>
      <svg
        ref={ref}
        className="graph__svg">
        <g className='plot-area' />
        <g className='x-axis' />
        <g className='y-axis' />
      </svg>
    </section>
  )
}

export default Graph

