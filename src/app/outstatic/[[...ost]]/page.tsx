import 'outstatic/outstatic.css'
import { Outstatic } from 'outstatic'

export default async function Page({ params }: { params: Promise<{ ost: string[] }> }) {
  const ost = (await params).ost
  return <Outstatic ost={ost} />
}
