// pages/users.tsx
import React from "react"
import UserCard from "@/components/common/UserCard"
import { UserProps } from "@/interfaces"

interface UsersPageProps {
  users: UserProps[]
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  const users = data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }))

  return {
    props: {
      users,
    },
  }
}

export default UsersPage
