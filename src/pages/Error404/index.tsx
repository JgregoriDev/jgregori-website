import React from 'react'
import Template from '../Template';
import Style from "./Error404.module.scss"

export const Error404 = () => {
  return (
    <Template>
    <section className={Style.error}>
      <h3 className={Style.error__title}>Error 404:</h3>
      <h4 className={Style.error__subtitle}>Página no encontrada</h4>
    </section>
    </Template>
  )
}