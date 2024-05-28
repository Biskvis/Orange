'use client'

import {FormEvent, useState} from 'react';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

 
export default function QuoteCalc() {

    const [region, setRegion] = useState('');
    const [distance, setDistance] = useState('');
    const [size, setSize] = useState('');
    const [estimate, setEstimate] = useState(0)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const multiplier = region === '2' ? 1 : 1.2;
        const Distance = Number(distance)
        const Size = Number(size)
        const Estimate = parseInt((Distance * (multiplier * Size)).toFixed(0))
        setEstimate(Estimate)
        
    }
    function clearForm() {
        setRegion('')
        setDistance('')
        setSize('')
        setEstimate(0)
    }
    return (
        <div className="p-4 drop-shadow-2xl">
            <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Quote Calculator</CardTitle>
                <CardDescription>Estimate delivery cost in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                {estimate > 0 ? <Card>
      <CardHeader className="pb-2">
        <CardDescription>Estimate</CardDescription>
        <CardTitle className="text-4xl">{region === '1' ? '€' : '$'}{estimate}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">Not including loading/unloading fees.</div>  
        <div className="text-xs text-muted-foreground">Not including occupied space fees.</div>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
 :
                
                <form id='quote' onSubmit={(e) => handleSubmit(e)}>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="Region">Region</Label>
                    <Select onValueChange={(e) => setRegion(e)} required value={region}>
                        <SelectTrigger id="region">
                        <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                        <SelectItem value="1">Europe</SelectItem>
                        <SelectItem value="2">North America</SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="Distance">Distance</Label>
                    <Input id="distance" placeholder="Distance (km)" type='number' onChange={(e) => setDistance(e.target.value)} value={distance} required />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="Size">Size</Label>
                    <Select onValueChange={(e) => setSize(e)} required value={size}>
                        <SelectTrigger id="Size">
                        <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                        <SelectItem value="1">Small<small> &lt;15kg</small></SelectItem>
                        <SelectItem value="2">Medium <small> &lt;250kg</small></SelectItem>
                        <SelectItem value="3">Large <small> &lt;1000kg</small></SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                </div>
                </form>
                }
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={clearForm}>Clear</Button>
                <Button type="submit" form='quote'>Estimate</Button>
            </CardFooter>
            </Card>
        </div>
    )
}