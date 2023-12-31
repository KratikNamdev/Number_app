import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, ListItemIcon, MenuItem } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { checkDateType, checkImageType } from '../../../utils/Global/main';

const NormalTable = ({ data, tableStructure, isLoading }) => {

    const columns = useMemo(() => tableStructure.map((element) =>
        checkDateType(element.accessKey) ?
            {
                header: element.header,
                accessorKey: element.accessKey,
                Cell: ({ renderedCellValue }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        {
                            renderedCellValue ?
                                new Date(renderedCellValue).toDateString()
                                :
                                'N/A'
                        }
                    </Box>
                )
            }
            :
            !checkImageType(element.accessKey) ?
                {
                    header: element.header,
                    accessorKey: element.accessKey,
                    Cell: ({ renderedCellValue }) => (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <div className='max-w-xs'>
                                {
                                    renderedCellValue ?
                                        renderedCellValue
                                        :
                                        'N/A'
                                }
                            </div>
                        </Box>
                    )
                }
                :
                {
                    header: element.header,
                    accessorKey: element.accessKey,
                    Cell: ({ renderedCellValue }) => (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                            }}
                        >
                            {
                                renderedCellValue ?
                                    <img src={renderedCellValue} alt='banner' className='w-32 h-20 rounded-lg object-cover' />
                                    :
                                    <div className='w-32 h-20 rounded-lg bg-gray-400 flex items-center justify-center text-sm'>No Image</div>
                            }
                        </Box>
                    )
                }
    ), [tableStructure]);

    return (
        <div className=' rounded-lg'>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableColumnOrdering
                enableGlobalFilter={true}
                enableRowActions
                state={{
                    isLoading
                }}
                renderRowActionMenuItems={({ closeMenu }) => [
                    <MenuItem
                        key={0}
                        onClick={() => {
                            closeMenu();
                        }}
                        sx={{ m: 0 }}
                    >
                        <ListItemIcon>
                            <Edit />
                        </ListItemIcon>
                        Edit
                    </MenuItem>,
                    <MenuItem
                        key={1}
                        onClick={() => {
                            closeMenu();
                        }}
                        sx={{ m: 0 }}
                    >
                        <ListItemIcon>
                            <Delete />
                        </ListItemIcon>
                        Delete
                    </MenuItem>,
                ]}
            />
        </div>
    )
}

export default NormalTable