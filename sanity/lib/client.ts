// client is used to connect our Next.js project with Sanity. For this purpose 'next-sanity' library is used.

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
