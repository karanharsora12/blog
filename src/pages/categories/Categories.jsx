import { useRouter } from '@/routes/hooks/use-router'
import { Button, Card } from '@material-tailwind/react'
import React from 'react'

const Categories = () => {
  const router = useRouter();
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-2xl font-semibold">Categories</h2>
        </div>
        <Button onClick={() => router.push("add")}>Add Category</Button>
      </div>
      <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
        <h1>Categories</h1>
      </Card>
    </div>
  )
}

export default Categories
