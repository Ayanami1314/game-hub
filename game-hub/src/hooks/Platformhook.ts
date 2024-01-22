import useData from "./useData";
export interface parentPlatForm {
  id: number;
  name: string;
  slug: string;
}
const usePlatForms = () => {
  return useData<parentPlatForm>("/platforms/lists/parents");
};

export default usePlatForms;
