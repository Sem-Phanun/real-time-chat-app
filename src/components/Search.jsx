import { useState, useContext} from 'react'

const Search = () => {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    const { currentUser } = useContext()
  return (
    <>
        <section className="search">
            <div className="searchForm">
                <input type="text"
                    placeholder='Find a user'

                />
            </div>
            {err && <span>User not found!</span>}
            {user && (
                <div className='userChat'>
                    <img src="" alt="" />
                    <div className="userChatInfo">
                        <span></span>
                    </div>
                </div>
            )}
        </section>
    </>
  )
}

export default Search