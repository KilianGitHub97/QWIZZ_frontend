import { useQuery,useMutation, useQueryClient} from '@tanstack/react-query';

interface MenuItem {
    menuName: string;
    state: boolean;
  }

export const useHamburgerMenuState = () => useQuery({
    queryKey: ['SidebarCollapsed'],
    refetchOnWindowFocus: false,
    queryFn:()=>false
    
})

export const useHamburgerMenuMutation=()=>{
    let queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn:(state:boolean) => {
            
           
            return state
        },
        onSuccess:(state:any)=>{
            queryClient.setQueryData(['SidebarCollapsed'], (old:any) =>!old)
            
        }
    })

    return mutation
}


export const useSideButtonState = () => useQuery({
    queryKey: ['sideButtons'],
    refetchOnWindowFocus: false,
    queryFn:()=>[
        { menuName: 'documents', state: false ,icon:"documents" },
        { menuName: 'chats', state: true, icon:"bubble3" },
        { menuName: 'notes', state: false, icon:"notes" }
      ]
    
})


const toggleState = (menu: MenuItem, menuName: string): MenuItem => {
    if (menu.menuName === menuName) {
        return { ...menu, state: true };
      } else {
        return {...menu, state:false};
      }
  };

export const useSideButtonMutation=()=>{
    let queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn:(MenuName:string) => {
            
          
            return MenuName
        },
        onSuccess:(MenuName:any)=>{
            queryClient.setQueryData(['sideButtons'], (old:any) =>old.map((item:MenuItem)=>toggleState(item,MenuName)))
            
        }
    })

    return mutation
}


