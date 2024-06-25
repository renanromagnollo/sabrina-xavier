import { HygraphAboutStudioProps, HygraphHomeProps } from "@/types/hygraph-types"
import { InstagramPostProps } from "@/types/post-instagram-types"
import { ReactNode, createContext, useEffect, useState } from "react"



interface dataProps {
  instagramPosts: InstagramPostProps[]
  setInstagramPosts: (posts: InstagramPostProps[]) => void
  hygraphHome: HygraphHomeProps | {}
  setHygraphHome: (hygraphHome: HygraphHomeProps) => void
  // setHomeContext: (hygraphHome: HygraphHomeProps, posts: InstagramPostProps[]) => void
}

const data: dataProps = {
  instagramPosts: [],
  setInstagramPosts: () => {},
  hygraphHome: {},
  setHygraphHome: () => {},
  // setHomeContext: () => {}
}

export const DataContext = createContext<dataProps>(data)


function DataProvider({children}: {children: ReactNode}) {

  const [state, setState] = useState(data)

  useEffect(() => {
    console.log('state of DataProvider: ', state)
}, [state])

  function updateState(key: string, value: any) {
    console.log('values: ', value)
    setState(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  return (
    <DataContext.Provider value={{
      instagramPosts: state.instagramPosts,
      setInstagramPosts: posts => updateState('instagramPosts', posts),
      hygraphHome: state.hygraphHome,
      setHygraphHome: hygraphHome => updateState('hygraphHome', hygraphHome)
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider