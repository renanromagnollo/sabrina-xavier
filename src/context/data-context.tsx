import { InstagramPostProps } from "@/types/post-instagram-types"
import { ReactNode, createContext, useEffect, useState } from "react"

interface dataProps {
  instagramPosts: InstagramPostProps[]
  setInstagramPosts: (posts: InstagramPostProps[]) => void
}

const data: dataProps = {
  instagramPosts: [],
  setInstagramPosts: () => {}
}

export const DataContext = createContext<dataProps>(data)


function DataProvider({children}: {children: ReactNode}) {

  const [state, setState] = useState(data)

  useEffect(() => {
    console.log('state of DataProvider: ', state)
}, [state])

  function updateState(key: string, value: any) {
    console.log('values: ', value)
    setState({
      ...state,
      [key]: value
    })
  }

  return (
    <DataContext.Provider value={{
      instagramPosts: state.instagramPosts,
      setInstagramPosts: posts => updateState('instagramPosts', posts)
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider