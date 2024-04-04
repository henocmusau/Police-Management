'use client'
import React, { ChangeEvent, useState } from 'react'
import { policeOfficer } from "@/types";


export default function useOfficersFilter(initialDatas: policeOfficer[]) {
  const [search, setSearch] = useState('')

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  const filteredOfficers = () => {
    return initialDatas
      .filter(officer =>
        officer.firstname.toLowerCase().includes(search.toLowerCase())
        || officer.lastname.toLowerCase().includes(search.toLowerCase())
        || officer.middlename?.toLowerCase().includes(search.toLowerCase())
        || officer.rank?.toLowerCase().includes(search.toLowerCase())
        || officer.function?.toLowerCase().includes(search.toLowerCase())
        || officer.position?.toLowerCase().includes(search.toLowerCase())
      )
  }

  return {
    onInputChange, filteredOfficers
  }
}
