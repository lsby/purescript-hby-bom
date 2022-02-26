module Hby.Web where

import Data.Argonaut (Json)
import Hby.Task (Task)

type Location
  = { hash :: String, href :: String, port :: String }

foreign import getLocation :: Task Location

foreign import getQuery :: Location -> Json
