import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Container } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { getMe } from "../api/users"

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const location = useLocation()

  const fetchMe = async () => {
    const data = await getMe()
    if (data.error) {
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
    }
  }

  useEffect(() => {
    fetchMe()
  }, [location])

  return (
    <Container pt={4}>
      <Text as="h3">Home</Text>
      {!loggedIn ? (
        <Text mt={2}>
          Log in to do anything{" "}
          <span role="img" aria-label="sparkle_emoji">
            ✨
          </span>
          fun
          <span role="img" aria-label="sparkle_emoji">
            ✨
          </span>
        </Text>
      ) : (
        <Text mt={2}>
          Welcome to your{" "}
          <span role="img" aria-label="sparkle_emoji">
            ✨
          </span>
          home page!
          <span role="img" aria-label="sparkle_emoji">
            ✨
          </span>
        </Text>
      )}
    </Container>
  )
}

export default Home
