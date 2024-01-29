import { NameSpace } from "../../const";
import { TState } from "../../types/type-store";

export const selectPosts = (state: TState) => state[NameSpace.Post].posts;
