import Button from "../../../../components/ui/Button";
import {useState} from "react";
import {data} from "autoprefixer";
import axios from "axios";
import * as cheerio from 'cheerio';

const AddBookmark = () => {
    const [enteredUrl, setEnteredUrl] = useState();
    const [enteredTitle, setEnteredTitle] = useState<string>();
    const [enteredDescription, setEnteredDescription] = useState<string>();
    const [errors, setErrors] = useState('');

    const urlChangeHandler = (event: any) => {

        const value = event.target.value

        if (isValidUrl(value)) {
            setErrors('');
            setEnteredUrl(value);
            getUrlInformation(value).then(r => console.log(data));
        } else {
            setErrors('This is not a valid Url');
        }
    }

    const getUrlInformation = async (url: string) => {
        await axios.get(url).then(({data}) => {
            const $ = cheerio.load(data);

            let title = $('title').text();
            let description = $('meta[name="description"]').attr('content');

            setEnteredTitle(title);
            setEnteredDescription(description)
        });
    }

    const isValidUrl = (urlString: string) => {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
            '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
        return urlPattern.test(urlString);
    }

    const submitHandler = (event: any) => {
        event.preventDefault();

        const formData = {
            url: enteredUrl,
            title: enteredTitle,
            description: enteredDescription
        }
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <div className="flex flex-col mb-6">
                        <label className="font-medium mb-2">Url:</label>
                        <input type="text" onChange={urlChangeHandler} value={enteredUrl} className="p-2 rounded dark:bg-[#575757] border dark:border-gray-600  focus:ring-2 focus:ring-bleed-blue outline-0" />
                        <div>{errors}</div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="font-medium mb-2">Title</label>
                        <input onChange={e => setEnteredTitle(e.target.value)} type="text" value={enteredTitle} className="p-2 rounded dark:bg-[#575757] border dark:border-gray-600  focus:ring-2 focus:ring-bleed-blue outline-0" />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="font-medium mb-2">Description</label>
                        <textarea onChange={e => setEnteredDescription(e.target.value)} value={enteredDescription} className="p-2 rounded dark:bg-[#575757] border dark:border-gray-600  focus:ring-2 focus:ring-bleed-blue outline-0" />
                    </div>
                    <Button variant="primary" full>Submit</Button>
                </div>
            </form>
        </>
    )
};

export default AddBookmark