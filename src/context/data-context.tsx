import { InstagramPostProps } from "@/types/post-instagram-types"
import { ReactNode, createContext, useState } from "react"

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

  function updateState(key: string, value: any) {
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