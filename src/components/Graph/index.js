import { useD3 } from '../../hooks/useD3'
import * as d3 from 'd3'
import './index.scss'

const Graph = () => {
  const data = [
    { name: 'LIQID Cash', initial: 92, value: 920, color: '#C9B7C5' },
    { name: 'LIQID Real Estate', initial: 63, value: 630, color: '#AFDDAF' },
    { name: 'LIQID Wealth', initial: 85, value: 850, color: '#076283' },
    {
      name: 'LIQID Private Equity',
      initial: 22,
      value: 220,
      color: '#79C6C0',
    },
    { name: 'LIQID Venture', initial: 51, value: 510, color: '#FFE163' },
  ]

  const ref = useD3(
    (svg) => {
      // Responsive Graph

      // const svgHeight = svg.node().getBoundingClientRect().width
      // const svgWidth = svg.node().getBoundingClientRect().height

      const svgHeight = 600
      const svgWidth = 600
      const graphHeight = 500
      const graphWidth = 500
      const graphMarginLeft = (svgHeight - graphHeight) / 2
      const graphMarginTop = (svgWidth - graphWidth) / 2
      const maxValue = d3.max(data, (d) => d.value)

      const x = d3
        .scaleBand()
        .domain(data.map((it) => it.name))
        .range([0, graphWidth])
        .paddingInner(0.2)
        .paddingOuter(0.2)

      const y = d3.scaleLinear().domain([0, maxValue]).range([graphHeight, 0])

      const xAxis = d3.axisBottom(x)
      const yAxis = d3.axisLeft(y)

      // Tooltip
      const tooltip = d3
        .select('body')
        .append('div')
        .style('position', 'absolute')
        .style('z-index', '10')
        .style('visibility', 'hidden')
        .style('padding', '10px')
        .style('background', 'rgba(255,255,255,1)')
        .style('border-radius', '0 0 0 1.2rem')
        .style('color', 'rgba(0,0,0,1)')

      svg
        .attr('viewBox', [0, 0, svgWidth, svgHeight])
        .attr('height', svgHeight)
        .attr('width', svgWidth)

      // Bars
      const bar = svg
        .append('g')
        .attr('height', graphHeight)
        .attr('width', graphWidth)
        .attr(
          'transform',
          `translate(${(svgWidth - graphWidth) / 2}, ${
            (svgHeight - graphHeight) / 2
          })`
        )

      bar
        .selectAll('rect')
        .data(data)
        .join('rect')
        .attr('width', x.bandwidth)
        .attr('height', (d) => graphHeight - y(d.value))
        .attr('x', (d) => x(d.name))
        .attr('y', (d) => y(d.value))
        .attr('fill', (d) => d.color)
        .on('mouseover', function (e, d, i) {
          tooltip.html(`<div>${d.name}</div>`).style('visibility', 'visible')

          d3.select(this).transition().attr('fill', 'var(--clr-red)')
        })
        .on('mousemove', function (e) {
          tooltip
            .style('top', e.pageY + 10 + 'px')
            .style('left', e.pageX + 10 + 'px')
        })
        .on('mouseout', function () {
          tooltip.html(``).style('visibility', 'hidden')
          d3.select(this)
            .transition()
            .ease(d3.easeLinear)
            .duration(800)
            .delay((d, i) => i * 100)
            .attr('fill', (d) => d.color)
        })

      // x axis
      svg
        .append('g')
        .attr('transform', `translate(${graphMarginLeft}, ${graphMarginTop})`)
        .call(yAxis)
        .attr('color', 'var(--clr-graph-grey)')

      // y axis
      svg
        .append('g')
        .attr(
          'transform',
          `translate(${graphMarginLeft}, ${svgHeight - graphMarginTop})`
        )
        .call(xAxis)
        .attr('color', 'var(--clr-graph-grey)')
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

