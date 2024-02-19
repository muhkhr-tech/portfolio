import BelanjainajaPage from "../belanjainaja";
import DoDoingDonePage from "../dodoingdone";
import TodolistPage from "../todolist";

export default function ProjectDetailPage({params}: {params: {slug: string}}) {
  if (params.slug == 'belanjainaja') {
    return (
      <BelanjainajaPage slug={params.slug}/>
    )
  } else if (params.slug == 'todolist') {
    return (
      <TodolistPage slug={params.slug}/>
    )
  } else if (params.slug == 'dodoingdone') {
    return (
      <DoDoingDonePage slug={params.slug}/>
    )
  }
}