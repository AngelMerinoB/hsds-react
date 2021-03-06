import React from 'react'
import { storiesOf } from '@storybook/react'
import { NavLink } from '../src/index.js'
import { HashRouter as Router, Route } from 'react-router-dom'

const stories = storiesOf('NavLink', module)

const props = {
  activeStyle: { fontWeight: 'bold' },
  exact: true,
}

stories.add('Default', () => {
  const BasicExample = () => (
    <Router basename="/some/base">
      <div>
        <ul>
          <li>
            <NavLink {...props} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink {...props} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink {...props} to="/topics">
              Topics
            </NavLink>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  )

  const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  )

  const About = () => (
    <div>
      <h2>About</h2>
    </div>
  )

  const Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <NavLink {...props} to={`${match.url}/rendering`}>
            Rendering with React
          </NavLink>
        </li>
        <li>
          <NavLink {...props} to={`${match.url}/components`}>
            Components
          </NavLink>
        </li>
        <li>
          <NavLink {...props} to={`${match.url}/props-v-state`}>
            Props v. State
          </NavLink>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )

  const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )

  return <BasicExample />
})
