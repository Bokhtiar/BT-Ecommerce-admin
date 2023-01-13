import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react";
import { SubCategoryShowNetwork } from "../../network/subCategory.network";
import { ISubCategory } from '../../types/subCategory.types'

const SubCategoryShow: React.FC = (): JSX.Element => {
    const router = useRouter();
    const { id } = router.query;
    const _id = id;
    console.log(_id);

    const [category, setCategory] = useState<ISubCategory | null>(null);

    /* useCall back */
    const FetchData = useCallback(async () => {
        const response = await SubCategoryShowNetwork({ _id });
        
        if (response && response.status === 200) {
            setCategory(response.data.data);
        }
    }, [category]);

    /* useEffect */
    useEffect(() => {
        FetchData();
    }, []);


    return (
        <div className="flex gap-4">
            <div>
                <span>icon</span>
                <img src={category?.banner_image} alt="icon" />
                <span>Banner image</span>
                <img src={category?.icon} alt="" />
            </div>

            <div>
                <span>{category?.name}</span> <br />
                <span>{category?.category?.name}</span>
            </div>
            
        </div>
    )
}

export default SubCategoryShow