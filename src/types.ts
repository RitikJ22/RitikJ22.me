export type Project = {
  title: string,
  description: string,
  link?: string,
  tags: {
    name:string,
    logo?: React.ReactNode
  }[]
} 