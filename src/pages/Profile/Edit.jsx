import React from 'react'
import { getMyInfo } from '../../api/auth'
import { useQuery } from "@tanstack/react-query"

const Edit = () => {
  const { data, isPending } = useQuery({
    queryKey: ["editMyInfo"],
    queryFn: getMyInfo,
  });
  return (
    <div>Edit</div>
  )
}

export default Edit