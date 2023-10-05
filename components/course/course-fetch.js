import { useEffect } from 'react'
import axios from 'axios'

export default function CourseFetcher({ onCourseFetched }) {
  useEffect(() => {
    const FetchedCourse = async () => {
      try {
        const response = await axios.get('http://localhost:3005/api/course')
        console.log(response.data)
        onCourseFetched(response.data)
      } catch (error) {
        console.log('資料獲取失敗：', error)
      }
    }
    FetchedCourse()
  }, [])
}
