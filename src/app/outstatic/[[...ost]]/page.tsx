import 'outstatic/outstatic.css'
import { Outstatic } from 'outstatic'

export default async function Page({ params }: { params: Promise<{ ost: string[] }> }) {
  const { ost } = await params;
  return <Outstatic ost={ost} />
}
