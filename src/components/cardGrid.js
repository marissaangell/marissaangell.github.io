import * as React from "react"

import GradientCard from './gradientCard'
import GradientCardFull from './gradientCardFull'

const cards = [
  {
    name: 'Competitive exchange rates',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    date: '2018',
    tags: ['Snippet', 'Rails', 'Info']
  },
  {
    name: 'No hidden fees',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  	date: '2022',
  	tags: ['Snippet', 'Rails', 'Fees']
  },
  {
    name: 'Transfers are instant',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    date: '2019',
    tags: ['Transfers', 'Rails', 'Info']
  },
  {
    name: 'Mobile notifications',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    date: '2021',
    tags: ['Mobile', 'Info']
  },
]


export default function CardGrid(){
	return (
	  <div>
	      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-8">
	        { cards.map((entry) => (
				<div key={entry.name} className="relative">
					<GradientCard title={entry.name} date={entry.date} desc={entry.description}/>
				</div>
	        ))}
	        </dl>

	        <div className="divider" />

        <dl className="space-y-10 mt-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-8">
	        { cards.map((entry) => (
				<div key={entry.name} className="relative">
					<GradientCardFull title={entry.name} date={entry.date} desc={entry.description} tags={entry.tags}/>
				</div>
	        ))}
     	</dl>
      </div>
	)
}