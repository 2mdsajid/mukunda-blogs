'use client'

import { BACKEND } from "@/utils/data";
import { HighestViewNote, TransformedNote } from "@/utils/types";
import { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import DashContents from "./DashContents";
import SideBar from "./SideBar";
import KeyLayout from "@/app/components/reused/KeyLayout";

function PageContents() {

    const [activeButton, setActiveButton] = useState("published");
    const [notes, setNotes] = useState<TransformedNote[]>([]);
    const [drafts, setDrafts] = useState<TransformedNote[]>([]);
    const [published, setPublished] = useState<TransformedNote[]>([]);
    const [isAdmin, setIsAdmin] = useState(false);

    const handleButtonClick = (buttonType: string) => {
        setActiveButton(buttonType);
    };

    const HandleAdminSet = (isAdmin: boolean) => {
        setIsAdmin(isAdmin);
    }

    // necessary states
    const [viewssum, setViewsSum] = useState(0);
    const [highestViewNote, setHighestViewNote] = useState<HighestViewNote>({ title: '', noteid: '', views: 0 });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const notesResponse = await fetch(BACKEND + '/gettransformednotes');
                const notesData = await notesResponse.json();
                setNotes(notesData.notes);

                const visitorsResponse = await fetch(BACKEND + '/getstatistics');
                const visitorsData = await visitorsResponse.json();
                setViewsSum(visitorsData.viewssum);
                setHighestViewNote(visitorsData.highestviewnote);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (notes) {
            const drafts = notes.filter((note) => note.review === true && note.published === false);
            const published = notes.filter(
                (note) => note.review === false && note.published === true
            );
            setDrafts(drafts);
            setPublished(published);
        }
    }, [notes]);



    return (
        <KeyLayout>
            <div className={`${!isAdmin && 'h-screen'} w-screen min-h-screen  `}>
                {/* contents */}
                {isAdmin ? <div className='w-full '>
                    {notes && notes.length > 0 ? <div className='flex flex-col md:flex-row relative'>
                        <div className='w-full md:w-[20%] md:h-[90vh] sticky top-[4rem] bg-primary dark:bg-dark-primary  '>
                            <SideBar handleButtonClick={handleButtonClick} activeButton={activeButton} />
                        </div>
                        <div className='w-full md:w-[80%]  overflow-auto'>
                            <DashContents activeButton={activeButton} published={published} drafts={drafts} viewssum={viewssum} highestViewNote={highestViewNote} />
                        </div>
                    </div> : <div>
                        <p>Please Wait.....</p>
                    </div>}

                </div> : <div className=' h-full overflow-hidden flex items-center justify-center text-black'>
                    <AdminLogin HandleAdminSet={HandleAdminSet} />
                </div>}
            </div>
        </KeyLayout>
    )
}

export default PageContents