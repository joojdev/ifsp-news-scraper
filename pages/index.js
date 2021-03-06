import PageTemplate from '@components/PageTemplate'
import Card from '@components/Card'
import Center from '@components/Center'
import Post from '@components/Post'

import { useEffect, useState } from 'react'

function HomePage() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(async () => {
    const headers = new Headers()
    headers.set('Content-Type', 'application/json')

    const response = await fetch('/api/news', {
      method: 'POST',
      headers
    })
    if (!response.ok) {
      setIsLoading(false)
      setError(true)
    }

    const posts = await response.json()
    setData(posts)
    setIsLoading(false)
  }, [])

  if (isLoading) return <Center><h1>Carregando...</h1></Center>
  if (error) return <Center><h1>Erro!</h1></Center>
  if (!data) return <Center><h1>Erro!</h1></Center>

  return (
    <PageTemplate title="Notícias do IFSP São Carlos">
      <Card title={data.firstPost.title} link={data.firstPost.link} thumbnail={data.firstPost.thumbnail}  />
      {data.otherPosts.map((post) => (
        <Card title={post.title} link={post.link} thumbnail={post.thumbnail} />
      ))}
      {data.lastPosts.map((post) => (
        <Post title={post.title} link={post.link} date={post.date} />
      ))}
    </PageTemplate>
  )
}

export default HomePage