import Layout from '../components/layout';
import React from 'react';
import Cards from '../components/cards';

export default function About() {

  return (
    <Layout>
      <section className="md:h-full flex items-center text-gray-600">
          <div className="Container px-5 py-24">
                        <Cards prefix={"lala"} coments={'lalal'} />
          </div>
      </section>
    </Layout>
  )
}