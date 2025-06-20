export type Project = {
  title: string,
  description: string,
  link?: string,
  twitter?: string,
  tags: {
    name:string,
    logo?: React.ReactNode
  }[]
} 