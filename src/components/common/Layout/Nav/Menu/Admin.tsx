import * as S from './style'
import { Link } from 'react-router-dom'

function Admin({opacity}: {opacity: number}) {
  const holidayCount = 5
  const nightCount = 10

  return (
    <S.flexDiv opacity={opacity}>
      <S.shadowDiv>
        <S.menuDiv opacity={opacity}>
          <Link to='/adminApproval' className='adminLink'>
            <span>연차 승인 대기</span>
            <S.countSpan>{holidayCount}</S.countSpan>
          </Link>
        </S.menuDiv>
      </S.shadowDiv>
      <S.shadowDiv>
        <S.menuDiv opacity={opacity}>
          <Link to='/adminApproval' className='adminLink'>
            <span>당직 승인 대기</span>
            <S.countSpan>{nightCount}</S.countSpan>
          </Link>
        </S.menuDiv>
      </S.shadowDiv>
      <S.linkSpan opacity={opacity}>
        <Link to='/adminAuth'>관리자 권한 설정</Link>
      </S.linkSpan>
      <S.linkSpan opacity={opacity}>
        <Link to='/accApproval'>계정 승인 설정</Link>
      </S.linkSpan>
    </S.flexDiv>
  )
}

export default Admin