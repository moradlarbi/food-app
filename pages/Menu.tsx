import { useState, useRef,useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuItem from '../components/MenuItem'
import { request, GraphQLClient, gql } from 'graphql-request';
const Menu = () => {
  const [categories, setCategories] = useState([])
  const [menus,setMenus] = useState([])
  const [showCategorie, setShowCategorie] = useState("");
  const actifCategorie = useRef()
  function updateActifCategorie(el) {
    if (actifCategorie.current) {
      //actifCategorie.current.classList.remove("font-bold")
      actifCategorie.current = el
      //actifCategorie.current.classList.add("font-bold")
    }
    
  }
      useEffect(()=> {
        async function fetchData() {
          const endpoint = "/api/graphql"
          const graphqlClient = new GraphQLClient(endpoint, {});
          const query = gql`
          query {
            getMenuItems {
              name
              price
              category
              link
            }
            getCategorys {
              category
              description
            }
          }
          `
          const data = await graphqlClient.request(query);
          return data
        }
        fetchData()
        .then(data => {
          setMenus(data.getMenuItems)
          setCategories(data.getCategorys)
        })
        .catch(console.error);
      
      },[])

  return (
    <div className='px-[24px] md:px-[120px] w-full'>
        <Header />
        <div className=' my-28'>
            <h1 className=' flex items-center uppercase text-primary text-base relative after:ml-4 after:w-12 after:h-tiny after:content-[""]  after:bg-primary '>Our Menu</h1>
            <div className=' flex md:flex-row flex-col my-8 items-center justify-between'>
              <h1 className='font-bold text-5xl md:w-1/3 md:mb-0 mb-4'>Discover Our menu Chart</h1>
              <h3 className='text-grey text-base tracking-tight md:w-1/3'>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</h3>
            </div>     
        </div>
        <div>
            <ul className='categories flex gap-6 flex-wrap pl-6'>
                <li ref={actifCategorie} className=' cursor-pointer font-bold text-lg' onClick={(e) => {
                  setShowCategorie("");
                  updateActifCategorie(e.target)
                }}>All</li>
                {
                    categories.map((categorie,index) => {
                        return <li key={index} title={categorie.category} className=' cursor-pointer text-xl capitalize ' onClick={(e) => {
                          setShowCategorie((e.target as HTMLElement).title);
                          updateActifCategorie(e.target);
                        }}>{categorie.category}</li>
                    })
                }
            </ul>
            <div className='grid gap-8 grid-cols-minMax mt-7 mb-7'>
            {
                menus.map((menu,index) => {
                    return ( (showCategorie == "") ||(menu.category == showCategorie) ) && <MenuItem key={index} item={menu} />
                })
            }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Menu