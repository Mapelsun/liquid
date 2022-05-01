import { useD3 } from '../../hooks/useD3'
import * as d3 from 'd3'
import './index.scss'

const Graph = () => {
  const data = [
    {
      name: 'LIQID Cash',
      initial: 92,
      value: 920,
      growth: 1.0,
      color: '#C9B7C5',
    },
    {
      name: 'LIQID Real Estate',
      initial: 63,
      value: 630,
      growth: 1.0,
      color: '#AFDDAF',
    },
    {
      name: 'LIQID Wealth',
      initial: 85,
      value: 850,
      growth: 1.0,
      color: '#076283',
    },
    {
      name: 'LIQID Private Equity',
      initial: 22,
      value: 220,
      growth: 1.0,
      color: '#79C6C0',
    },
    {
      name: 'LIQID Venture',
      initial: 51,
      value: 510,
      growth: 1.0,
      color: '#FFE163',
    },
  ]

  const ref = useD3(
    (svg) => {
      const width = 700
      const height = 400
      const margin = { top: 20, right: 0, bottom: 30, left: 40 }

      // x axis
      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.3)

      const xAxis = (g) =>
        g
          .attr('transform', `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(x).tickSizeOuter(0))
          .attr('color', 'var(--clr-black)')

      const xAxisG = svg.append('g').call(xAxis)
      xAxisG.selectAll('text').attr('fill', 'var(--clr-graph-grey)')

      // y axis
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)])
        .nice()
        .range([height - margin.bottom, margin.top])

      const yAxis = (g) =>
        g
          .attr('transform', `translate(${margin.left},0)`)
          .call(d3.axisLeft(y).tickFormat(d3.format(',.2s')))
          .attr('color', 'var(--clr-black')

      const yAxisG = svg.append('g').call(yAxis)
      yAxisG.selectAll('text').attr('fill', 'var(--clr-graph-grey)')

      // tooltip
      const tooltip = d3
        .select('body')
        .append('div')
        .style('position', 'absolute')
        .style('z-index', '10')
        .style('visibility', 'hidden')
        .style('display', 'none')
        .style('padding', '10px')
        .style('background', 'rgba(255,255,255,1)')
        .style('border-radius', '0 0 0 1.2rem')
        .style('color', 'rgba(0,0,0,1)')

      // the graph
      const theGraph = svg
        .append('g')
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('fill', (d) => d.color)
        .attr('x', (d) => x(d.name))
        .attr('y', (d) => y(d.value))
        .attr('height', (d) => y(0) - y(d.value))
        .attr('width', x.bandwidth())
        .on('mouseover', function (e, d, i) {
          tooltip
            .html(
              `<div class="tool-tip">
                <p><span>Total:</span><span>${d.value} €</span></p>
                <p><span>Initial invest:</span><span>${d.initial} €</span></p>
                <p><span>Growth:</span><span>${d.growth} %</span></p>
              </div>`
            )
            .style('visibility', 'visible')
            .style('display', 'block')

          d3.select(this)
            .transition()
            .attr('fill', (d) => d.color)
        })
        .on('mousemove', function (e) {
          tooltip
            .style('top', e.pageY + 10 + 'px')
            .style('left', e.pageX + 10 + 'px')
        })
        .on('mouseout', function () {
          tooltip
            .html(``)
            .style('visibility', 'hidden')
            .style('display', 'none')
          d3.select(this)
            .transition()
            .attr('fill', (d) => d.color)
        })

      // value on top of bar
      const valueOnBar = svg
        .selectAll('bar')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'bar')
        .attr('text-anchor', 'middle')
        .attr('x', function (d) {
          return x(d.name) + x.bandwidth() / 2
        })
        .attr('y', function (d) {
          return y(d.value) - 15
        })
        .text(function (d) {
          return `${d.value}€`
        })
        .style('font-size', 10)
        .style('fill', 'var(--clr-black)')

      svg
        .attr('preserveAspectRatio', 'xMaxYMax meet')
        .attr('viewBox', [-20, -20, width + 50, height + 80])
    },
    [data.length]
  )

  return (
    <section className='graph'>
      <h2 className='graph__heading'>Your products</h2>
      <svg ref={ref} className='graph__svg'></svg>
    </section>
  )
}

export default Graph

