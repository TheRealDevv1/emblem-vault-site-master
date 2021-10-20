import { Box, Flex, Text, Link, Image, Stack, Spinner, useColorMode } from '@chakra-ui/core'
import Loader from 'react-loader'
import Refreshing from './Refreshing'
import { useRouter } from 'next/router'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { validImage } from '../utils'
import { EMBLEM_API } from '../constants'
import CoinBalance from './partials/CoinBalance'
import InfiniteScroll from 'react-infinite-scroll-component';
import Embed from './Embed'

export default function Newest() {
  const { query } = useRouter()
  const [pagePosition, setPagePosition] = useState(Number(query.start) || 0)
  const { account, chainId } = useWeb3React()
  const [vaults, setVaults] = useState([])
  const [state, setState] = useState({ loaded: false })
  const [loadingApi, setLoadingApi] = useState(false)
  const [address, setAddress] = useState(query.address)
  const [experimental, setExperimental] = useState(query.experimental)
  const { colorMode } = useColorMode()
  const [shouldFetchData, setShouldFetchData] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [offset, setOffset] = useState(0)
  const PAGE_SIZE = 20

  const getVaults = async () => {    
    try {
      const response = await fetch(EMBLEM_API + '/newest/?start='+offset+'&size='+PAGE_SIZE, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          service: 'evmetadata',
          chainId: chainId.toString(),
        },
      })
      let jsonData = await response.json()
      if (jsonData) {
        jsonData = jsonData.filter(item=>{return item.live && !item.claimedBy})
      }      
      setVaults(vaults.concat(jsonData))
      setState({ loaded: true })
      setLoadingApi(false)
    } catch (error) {}
  }

  const fetchData = async() =>{
    console.log(offset, PAGE_SIZE, offset+PAGE_SIZE)
    setOffset(offset+PAGE_SIZE)
    setShouldFetchData(true)
  }

  const more = ()=>{
    if (location.href.includes('start')) {
      location.href = location.href.replace('start='+pagePosition, 'start='+(pagePosition + PAGE_SIZE))
    } else {
      location.href = location.href + '?start='+(pagePosition + PAGE_SIZE)
    }
    // setPagePosition(pagePosition + PAGE_SIZE)
    // getVaults()
  }

  const less = ()=>{
    if (pagePosition - PAGE_SIZE < 0) {
      setPagePosition(PAGE_SIZE)
    }
    if (location.href.includes('start')) {
      location.href = location.href.replace('start='+pagePosition, 'start='+(pagePosition - PAGE_SIZE))
    } else {
      location.href = location.href + '?start='+(pagePosition - PAGE_SIZE)
    }
    // setPagePosition(pagePosition + 3)
    // getVaults()
  }

  const loadCache = () => {
    let vaults = JSON.parse(localStorage.getItem((address ? address : account) + '_' + chainId + '_newest')) // Load vaults from storage before updating from server!
    if (vaults) {
      setState({ loaded: true })
      setVaults(vaults)
      setLoadingApi(true)
    }
  }

  const saveCache = (vaults) => {
    localStorage.setItem((address ? address : account) + '_' + chainId + '_newest', JSON.stringify(vaults)) // Save new state for later
  }

  const [acct, setAcct] = useState('')
  useEffect(() => {
    if (account && acct != account) {
      setAcct(account)
      setState({ loaded: false })
      getVaults()
    }
  }, [account, acct])

  const [chain, setChain] = useState(chainId)
  useEffect(() => {
    if (chainId && chain != chainId) {
      setChain(chainId)
      setState({ loaded: false })
      getVaults()
    }
  }, [chainId, chain])

  // useEffect(() => {
  //   if (!state.loaded) {
  //     console.log("load fires how many times")
  //     vaults.length < 1 ? getVaults() : setState({ loaded: true })
  //   }
  // }, [])

  useEffect(() => {
    if (shouldFetchData) {
      setShouldFetchData(false)
      getVaults()
    } else {
    }
  }, [shouldFetchData])

  return (
    <Loader loaded={state.loaded}>
      {loadingApi ? <Refreshing /> : ''}
       
        <InfiniteScroll                
          className="infinite-scroll"
          scrollableTarget="shannon-container"
          // height={200}
          dataLength={vaults.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={<Refreshing />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b> 
            </p>
          }
        >
      <Flex w="100%" justify="center" flexWrap="wrap" mt={10}>        
        {vaults.length ? (
          vaults.map((vault, index) => {
            let pieces = location.pathname.split('/')
            pieces.pop()
            let url = location.origin + pieces.join('/') + '/nft?id=' + vault.tokenId
            const flexSettings = {
              flex: '1',
              minW: '200px',
              maxW: '200px',
              borderWidth: '1px',
              // color: 'white',
              mx: '6',
              mb: '6',
              rounded: 'lg',
              overflow: 'hidden',
              borderColor: vault.status == 'claimed' ? 'green !important' : '',
              cursor: 'pointer',
            }
            const redirect = function () {
              setLoadingApi(true)
              location.href = url
            }
            return (
              <Box className="NFT newest" key={index} {...flexSettings} onClick={redirect}>
                <Text fontWeight="semibold" textAlign="center" mt={2} pl={2} isTruncated={true}>
                  {vault.name}
                  {!vault.private && vault.totalValue > 0 ? ': ~$' + vault.totalValue : null}
                </Text>
                <Stack align="center">
                  <Embed className="d-block w-100 NFT-newest-image" url={vault.image}/>
                </Stack>
                <Box d="flex" alignItems="baseline">
                  {/* <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="sm" ml="2">
                    {vault.private ? (
                      <>
                        <Text>Contents hidden. Click to view the vault and unlock values.</Text>
                      </>
                    ) : vault.values.length ? (
                      vault.values.map((coin, index) => {
                        if (index < 4)
                          return (
                            <Stack> 
                              <CoinBalance colorMode={colorMode} coin={coin}/>  
                            </Stack>
                          )
                        else if (index == 4)
                          return (
                            <Text fontWeight="bold" mt={2}>
                              ... Click to see the rest ...
                            </Text>
                          )
                      })
                    ) : (
                      <Text>
                        Nothing in here! <br />
                        Click to fill 'er up!
                      </Text>
                    )}
                  </Box> */}
                </Box>
                {/* <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="sm" ml="2">
                    <Text>
                      Total Computable Value: {vault.totalValue}
                    </Text>
                  </Box>
                  </Box> */}
                <Stack align="center" mt={3}>
                  {vault.status == 'claimed' ? <Text color="green.500">CLAIMED</Text> : null}
                </Stack>
              </Box>
            )
          })
          
        ) : (
          <Text>
            YOU DON'T SEEM TO HAVE ANY VAULTS.{' '}
            <Link color="#638cd8" href="../create">
              CREATE ONE HERE!
            </Link>
          </Text>
        )}
        
      </Flex>
      </InfiniteScroll>
    </Loader>
  )
}
