import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

const NotFound = () => (
    <Layout>
      <Fragment>
        <Head title="404 Error"/>
        <h1>Page Not Found</h1>
        <p><Link to="/">Head Home</Link></p>
      </Fragment>
    </Layout>
)

export default NotFound
