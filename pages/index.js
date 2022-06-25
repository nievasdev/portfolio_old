import Layout from '../components/layout';
import React from 'react';
import Cards from '../components/cards';
import Scene from '../components/Scene';

export default function Home() {

  return (
    <Layout>
      <section className="md:h-full flex items-center text-gray-600">
          <div className="Container px-5 py-24">
                        <Scene />
          </div>
      </section>
    </Layout>
  )
}