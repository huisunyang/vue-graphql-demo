import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
// 与 API 的 HTTP 连接
const httpLink = createHttpLink({
  // 你需要在这里使用绝对路径 一定是以graphql结尾的路径
  uri: 'https:/xxxxxxxxxxxxxxxxxxxxxxxx/graphql'
})
// 中间件添加请求头
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'Application-Id': 'xxxxx'
    }
  })
  return forward(operation)
})
// 缓存实现
const cache = new InMemoryCache()
// 创建 apollo 客户端
const apolloClient = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache
})
export default apolloClient
